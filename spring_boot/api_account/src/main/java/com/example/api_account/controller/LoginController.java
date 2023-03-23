package com.example.api_account.controller;

import com.example.api_account.dto.LoginDto;
import com.example.api_account.entity.Account;
import com.example.api_account.response.Message;
import com.example.api_account.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;


    @PostMapping("/signup")
    public String signUp(@RequestBody Account account) {

        return  loginService.login(account);
    }

    @PostMapping("/signin")
    public ResponseEntity<?>loginAccount(@RequestBody LoginDto loginDto){
        Message message = loginService.loginMessage(loginDto);
        return ResponseEntity.ok(message);
    }
}
