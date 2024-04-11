package com.example.oblig3;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class billeterController {
    public final List<billeter> billetterReg = new ArrayList<>();

    @PostMapping("/lagre")
    public void Lagre( billeter Billett) {
        billetterReg.add(Billett);
    }

    @GetMapping("/hentalle")
    public List<billeter> hentalle() {
        return billetterReg;
    }
    @DeleteMapping("/slettalle")
    public void slettalle(){
        billetterReg.clear();
    }
}
