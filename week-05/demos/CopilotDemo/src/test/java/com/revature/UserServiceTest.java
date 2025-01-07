package com.revature;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Mock
    private UserDAO userDAO;

    @Test
    void validateUsername_ValidUsername_ReturnsTrue() {
        assertTrue(userService.validateUsername("ValidUser123"));
    }

    @Test
    void validateUsername_NullUsername_ReturnsFalse() {
        assertFalse(userService.validateUsername(null));
    }

    @Test
    void validateUsername_EmptyUsername_ReturnsFalse() {
        assertFalse(userService.validateUsername(""));
    }

    @Test
    void validateUsername_ShortUsername_ReturnsFalse() {
        assertFalse(userService.validateUsername("short"));
    }

    @Test
    void validateUsername_NonAlphanumericUsername_ReturnsFalse() {
        assertFalse(userService.validateUsername("Invalid@User"));
    }

    @Test
    void validatePassword_ValidPassword_ReturnsTrue() {
        assertTrue(userService.validatePassword("Valid1!Password"));
    }

    @Test
    void validatePassword_NullPassword_ReturnsFalse() {
        assertFalse(userService.validatePassword(null));
    }

    @Test
    void validatePassword_EmptyPassword_ReturnsFalse() {
        assertFalse(userService.validatePassword(""));
    }

    @Test
    void validatePassword_ShortPassword_ReturnsFalse() {
        assertFalse(userService.validatePassword("Short1!"));
    }

    @Test
    void validatePassword_NoLowercase_ReturnsFalse() {
        assertFalse(userService.validatePassword("NOLOWERCASE1!"));
    }

    @Test
    void validatePassword_NoUppercase_ReturnsFalse() {
        assertFalse(userService.validatePassword("nouppercase1!"));
    }

    @Test
    void validatePassword_NoDigit_ReturnsFalse() {
        assertFalse(userService.validatePassword("NoDigit!"));
    }

    @Test
    void validatePassword_NoSpecialCharacter_ReturnsFalse() {
        assertFalse(userService.validatePassword("NoSpecial1"));
    }

    @Test
    void register_ValidUser_CallsSaveOnUserDAO() {
        User user = new User("ValidUser123", "Valid1!Password");
        when(userDAO.save(user)).thenReturn(user);

        userService.register(user);

        verify(userDAO, times(1)).save(user);
    }

    @Test
    void register_InvalidUser_DoesNotCallSaveOnUserDAO() {
        User user = new User("short", "short");

        userService.register(user);

        verify(userDAO, times(0)).save(user);
    }
}