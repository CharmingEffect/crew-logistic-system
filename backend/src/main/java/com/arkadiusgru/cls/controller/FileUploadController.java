package com.arkadiusgru.cls.controller;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.arkadiusgru.cls.model.FileDetails;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @Value("${upload.path}")
    private String uploadPath;

    @PostMapping("/upload-docs")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,
            @RequestParam("userId") Long userId, @RequestParam("description") String description) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("Please select a file to upload.", HttpStatus.BAD_REQUEST);
        }

        try {
            byte[] bytes = file.getBytes();
            String userSpecificPath = uploadPath + File.separator + userId;
            File userDirectory = new File(userSpecificPath);

            if (!userDirectory.exists()) {
                userDirectory.mkdirs();
            }
            String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
            String fileName = userId + "_" + description + "." + fileExtension;
            Path path = Paths.get(userSpecificPath + File.separator + fileName);
            Files.write(path, bytes);

            return new ResponseEntity<>("File uploaded successfully: " + fileName, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/download-docs")
    public ResponseEntity<List<FileDetails>> downloadFiles(@RequestParam("userId") Long userId) {
        String userSpecificPath = uploadPath + File.separator + userId;
        Path path = Paths.get(userSpecificPath);
        List<FileDetails> fileDetailsList = getFilesByUserId(path);

        if (!fileDetailsList.isEmpty()) {
            return new ResponseEntity<>(fileDetailsList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private List<FileDetails> getFilesByUserId(Path path) {
        File[] files = path.toFile().listFiles();
        if (files != null) {
            return Arrays.stream(files)
                    .filter(File::isFile)
                    .map(file -> new FileDetails(file.getName(), file.length()))
                    .collect(Collectors.toList());
        } else {
            return Collections.emptyList();
        }
    }


}
