package br.com.hugoamac.itauapp.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="tweets")
public class Tweet extends  AbstractModel{

    @Id
    private Long id;

    @Column(name="text",nullable = false)
    private String text;

    @Column(name="tags_id",nullable = false)
    private Integer tagsId;

    @Column(name="users_id",nullable = false)
    private Long usersId;

    @Column(name="created_at",nullable = false)
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date createdAt;

    public Tweet() {
    }

    public Tweet(Long id, String text, Integer tagsId, Long usersId, Date createdAt) {
        this.id = id;
        this.text = text;
        this.tagsId = tagsId;
        this.usersId = usersId;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getTagsId() {
        return tagsId;
    }

    public void setTagsId(Integer tagsId) {
        this.tagsId = tagsId;
    }

    public Long getUsersId() {
        return usersId;
    }

    public void setUsersId(Long usersId) {
        this.usersId = usersId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
