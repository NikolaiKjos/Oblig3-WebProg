package com.example.oblig3;

import com.fasterxml.jackson.databind.deser.impl.BeanPropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class billeterRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilleter(billeter innBilleter){
        String sql = "INSERT INTO billeter (film, antall, fornavn, etternavn, epost, telefon) values(?,?,?,?,?,?)";
        db.update(sql,innBilleter.getFilm(), innBilleter.getAntall(), innBilleter.getFornavn(),
                innBilleter.getEtternavn(), innBilleter.getEpost(), innBilleter.getTelefon());
    }

    public List<billeter> hentAlleBilleter(){
        String sql = "SELECT * FROM billeter ORDER BY etternavn";
        List<billeter>alleBilleter = db.query(sql, new BeanPropertyRowMapper(billeter.class));
        return alleBilleter;
    }

    public void slettAlleBilleter(){
        String sql = "DELETE FROM billeter";
        db.update(sql);
    }
}
