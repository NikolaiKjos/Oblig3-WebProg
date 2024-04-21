package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class billeterController {

    @Autowired
    billeterRepository rep;
    @PostMapping("/lagre")
    public void Lagre(billeter billet) {
        rep.lagreBilleter(billet);
    }

    @GetMapping("/hentalle")
    public List<billeter> hentalle() {
        return rep.hentAlleBilleter();
    }
    @GetMapping("/hentEnBillet")
    public billeter hentEnBillet(Integer id){
        return rep.hentEnBillet(id);
    }
    @PostMapping("/endreEnKunde")
    public void endreEnKunde(billeter billet){
        rep.endreEnBillet(billet);
    }

    @GetMapping("/slettEn")
    public void slettEn(Integer id){
        rep.slettEn(id);
    }

    @DeleteMapping("/slettalle")
    public void slettalle(){
        rep.slettAlleBilleter();
    }

}

