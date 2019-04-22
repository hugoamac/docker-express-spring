package br.com.hugoamac.itauapp.service;

import br.com.hugoamac.itauapp.model.User;
import br.com.hugoamac.itauapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userDAO;

    @Autowired
    public UserService(UserRepository userDAO){
        this.userDAO = userDAO;
    }

    public  List<User> findAllHasManyFollowers(){
        return this.userDAO.findTop5ByOrderByFollowersCountDesc();
    }


}
