package br.com.hugoamac.itauapp.contract;

import org.springframework.stereotype.Component;

@Component
public interface TotalHoraryContract {

    public Integer getTotal();

    public String getHorary();
}
