package br.com.hugoamac.itauapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User extends AbstractModel{

    @Id
    private Long id;

    @Column(name="name",nullable = false)
    private String name;

    @Column(name="screen_name", nullable = false)
    private String screenName;

    @Column(name="location",nullable = false)
    private String location;

    @Column(name="followers_count",nullable = false)
    private Long followersCount;

    @Column(name="lang",nullable = false)
    private String lang;

    @Column(name="description")
    private String description;

    @Column(name="profile_image_url",nullable = false)
    private String profileImageUrl;

    public User() {
    }

    public User(Long id, String name, String screenName, String location, Long followersCount, String lang, String description, String profileImageUrl) {
        this.id = id;
        this.name = name;
        this.screenName = screenName;
        this.location = location;
        this.followersCount = followersCount;
        this.lang = lang;
        this.description = description;
        this.profileImageUrl = profileImageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getScreenName() {
        return screenName;
    }

    public void setScreenName(String screenName) {
        this.screenName = screenName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getFollowersCount() {
        return followersCount;
    }

    public void setFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }
}
