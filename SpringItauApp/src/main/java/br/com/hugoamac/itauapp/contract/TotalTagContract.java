package br.com.hugoamac.itauapp.contract;

import org.springframework.stereotype.Component;

@Component
public interface TotalTagContract {

    public Integer getTotal();

    public String getTag();
}
