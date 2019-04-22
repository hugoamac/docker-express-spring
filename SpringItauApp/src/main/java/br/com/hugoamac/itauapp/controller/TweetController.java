package br.com.hugoamac.itauapp.controller;

import br.com.hugoamac.itauapp.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("tweets")
public class TweetController {

    private TweetService service;

    @Autowired
    public TweetController(TweetService service) {
        this.service = service;
    }

    @GetMapping(path = "/total-by-date/{date}")
    public ResponseEntity<?> findTotalGroupByHoraryWhereDate(@PathVariable String date){
        return new ResponseEntity<>(this.service.findTotalGroupByHoraryWhereDate(date), HttpStatus.OK);
    }

    @GetMapping(path = "/total-by-key/{key}")
    public  ResponseEntity<?>  findTotalGroupByTagWhereLangOrLocation(@PathVariable String key){
        return new ResponseEntity<>(this.service.findTotalGroupByTagWhereLangOrLocation(key), HttpStatus.OK);
    }
}
