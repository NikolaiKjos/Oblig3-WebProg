package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class billeterController {

    @Autowired
    billeterRepository rep;

    @PostMapping("/lagre")
    public void Lagre( billeter Billett) {
        rep.lagreBilleter(Billett);
    }

    @GetMapping("/hentalle")
    public List<billeter> hentalle() {
        return rep.hentAlleBilleter();
    }
    @DeleteMapping("/slettalle")
    public void slettalle(){
        rep.slettAlleBilleter();
    }
}
