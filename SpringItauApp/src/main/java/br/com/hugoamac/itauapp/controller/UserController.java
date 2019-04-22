package br.com.hugoamac.itauapp.controller;

import br.com.hugoamac.itauapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("users")
public class UserController {

    private UserService userService;

    @Autowired
    public  UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping(path="/has-many-followers")
    public ResponseEntity<?> findAllHasManyFollowers(){

        return new ResponseEntity<>(this.userService.findAllHasManyFollowers(), HttpStatus.OK);

    }
}
