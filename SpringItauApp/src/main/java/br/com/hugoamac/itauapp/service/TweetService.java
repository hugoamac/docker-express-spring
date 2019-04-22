package br.com.hugoamac.itauapp.service;

import br.com.hugoamac.itauapp.contract.TotalHoraryContract;
import br.com.hugoamac.itauapp.contract.TotalTagContract;
import br.com.hugoamac.itauapp.model.Tweet;
import br.com.hugoamac.itauapp.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetService {

    private TweetRepository tweetDAO;

    @Autowired
    public TweetService(TweetRepository tweetDAO) {
        this.tweetDAO = tweetDAO;
    }

    public List<TotalHoraryContract> findTotalGroupByHoraryWhereDate(String date){
        return this.tweetDAO.findTotalGroupByHoraryWhereDate(date);
    }

    public List<TotalTagContract> findTotalGroupByTagWhereLangOrLocation(String key){
        return this.tweetDAO.findTotalGroupByTagWhereLangOrLocation(key,key);
    }

}
