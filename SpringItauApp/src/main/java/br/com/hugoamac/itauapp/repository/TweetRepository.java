package br.com.hugoamac.itauapp.repository;

import br.com.hugoamac.itauapp.contract.TotalHoraryContract;
import br.com.hugoamac.itauapp.contract.TotalTagContract;
import br.com.hugoamac.itauapp.model.Tweet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TweetRepository extends CrudRepository<Tweet,Long> {

    @Query(value="SELECT COUNT(id) AS total , TIME(created_at) AS horary FROM tweets" +
            " WHERE DATE(created_at)=?1" +
            " GROUP BY TIME(created_at)" +
            " ORDER BY total DESC", nativeQuery = true)
    List<TotalHoraryContract> findTotalGroupByHoraryWhereDate(String createdAt);

    @Query(value="SELECT IF( total IS NULL,0,total) total, tag FROM tags tg" +
            " LEFT JOIN(" +
            "   SELECT COUNT(t.tags_id) AS total, t.tags_id FROM tweets t" +
            "   JOIN users u ON u.id = t.users_id" +
            "   WHERE ( u.lang = ?1 OR u.location = ?2 )" +
            "   GROUP BY (t.tags_id)" +
            " ) tmp ON tg.id = tmp.tags_id" +
            " ORDER BY total DESC", nativeQuery = true)
    List<TotalTagContract> findTotalGroupByTagWhereLangOrLocation(String lang, String location);
}
