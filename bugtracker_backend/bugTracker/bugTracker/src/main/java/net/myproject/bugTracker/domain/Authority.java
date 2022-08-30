package net.myproject.bugTracker.domain;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
public class Authority implements GrantedAuthority {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String authority;
    @ManyToOne(optional = false)
    private account acc;

    public Authority(){}

    public Authority(String authority){
        this.authority = authority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public account getAcc() {
        return acc;
    }

    public void setAcc(account acc) {
        this.acc = acc;
    }



}
