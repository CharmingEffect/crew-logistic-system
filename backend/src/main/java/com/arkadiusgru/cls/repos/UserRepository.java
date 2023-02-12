package com.arkadiusgru.cls.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.arkadiusgru.cls.model.Role;
import com.arkadiusgru.cls.model.User;

@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByRole(Role role);

    @Transactional
    @Modifying
    @Query("UPDATE User a " + "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableUser(String email);

    // delete confirmation token by user id
    @Transactional
    @Modifying
    @Query("DELETE FROM ConfirmationToken a WHERE a.user.id = ?1")
    int deleteConfirmationTokenByUserId(Long id);

    // select address id from user
    @Query("SELECT a.address.id FROM User a WHERE a.id = ?1")
    Long getAddressIdByUserId(Long id);

    // delete user by id
    @Transactional
    @Modifying
    @Query("DELETE FROM User a WHERE a.id = ?1")
    int deleteUserById(Long id);

    // deleye adress by adress id
    @Transactional
    @Modifying
    @Query("DELETE FROM Address a WHERE a.id = ?1")
    int deleteAddressById(Long id);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.avatar = :avatar WHERE u.email = :email")
    void updateAvatar(@Param("email") String email, @Param("avatar") byte[] avatar);

}
