package com.arkadiusgru.cls.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arkadiusgru.cls.dto.InfoDto;
import com.arkadiusgru.cls.repos.JobRepository;
import com.arkadiusgru.cls.repos.UserRepository;
import com.arkadiusgru.cls.dto.MemoryStats;

import java.util.ArrayList;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class SystemController {
    UserRepository userRepository;
    JobRepository jobRepository;

    @GetMapping(value = "/admin/systemStatus")
    public InfoDto getMethodName() {
        InfoDto infoDto = new InfoDto();
        ArrayList<Integer> rolesCrewMembers = new ArrayList<>();
        ArrayList<Integer> rolesAdmins = new ArrayList<>();

        infoDto.setNumberOfUsers(userRepository.count());
        infoDto.setNumberOfJobs(jobRepository.count());

        for (int i = 0; i < userRepository.count(); i++) {
            if (userRepository.findAll().get(i).getRole().toString() == "CREW_MEMBER") {
                rolesCrewMembers.add(i);
            } else if (userRepository.findAll().get(i).getRole().toString() == "ADMIN") {
                rolesAdmins.add(i);

            }
        }

        infoDto.setNumberOfCrewMembers((long) rolesCrewMembers.size());
        infoDto.setNumberOfAdmins((long) rolesAdmins.size());

        return infoDto;
    }

    @GetMapping("/admin/memory-status")
    public MemoryStats getMemoryStatistics() {
        MemoryStats stats = new MemoryStats();
        Long totalMemory = Runtime.getRuntime().totalMemory() / 1048576;
        Long maxMemory = Runtime.getRuntime().maxMemory() / 1048576;
        Long freeMemory = Runtime.getRuntime().freeMemory() / 1048576;

        stats.setHeapSize(Long.toString(totalMemory) + " MB");
        stats.setHeapMaxSize(Long.toString(maxMemory) + " MB");
        stats.setHeapFreeSize(Long.toString(freeMemory) + " MB");
        return stats;
    }

}
