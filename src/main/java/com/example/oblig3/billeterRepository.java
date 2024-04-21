package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public class billeterRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilleter(billeter innBilleter) {
        String sql = "INSERT INTO billeter (film, antall, fornavn, etternavn, epost, telefon) values(?,?,?,?,?,?)";
        db.update(sql, innBilleter.getFilm(), innBilleter.getAntall(), innBilleter.getFornavn(),
                innBilleter.getEtternavn(), innBilleter.getEpost(), innBilleter.getTelefon());
    }

    public List<billeter> hentAlleBilleter() {
        String sql = "SELECT * FROM billeter ORDER BY etternavn";
        List<billeter> alleBilleter = db.query(sql, new BeanPropertyRowMapper(billeter.class));
        return alleBilleter;
    }

    public billeter hentEnBillet(Integer id){
    Object [] param = new Object[1];
    param[0] = id;
    String sql = "SELECT * FROM billeter WHERE id=?";
    billeter enBillet = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(billeter.class));
    return enBillet;
    }

    public void endreEnBillet(billeter billet){
        String sql = "UPDATE billeter Set film=?, antall=?, fornavn=?, etternavn=?, epost=?, telefon=? WHERE id=?";
        db.update(sql, billet.getFilm(), billet.getAntall(), billet.getFornavn(), billet.getEtternavn(), billet.getEpost(), billet.getTelefon(), billet.getId());

    }

    public void slettEn(Integer id) {
        String sql = "DELETE FROM billeter WHERE id=?";
        db.update(sql, id);
    }
    public void slettAlleBilleter() {
        String sql = "DELETE FROM billeter";
        db.update(sql);
    }
}




