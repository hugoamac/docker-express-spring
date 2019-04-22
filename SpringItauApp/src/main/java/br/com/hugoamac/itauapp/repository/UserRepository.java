package br.com.hugoamac.itauapp.repository;

import br.com.hugoamac.itauapp.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    List<User> findTop5ByOrderByFollowersCountDesc();

}
