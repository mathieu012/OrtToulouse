package Exercice_Trie;

import javax.swing.*;

public class Main<result_min> {

    public static void main(String[] args) {

        String[] liste = {"coucou", "bonjour", "salut", "hey","italic"};
        String[] alphabet = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        String liste_tri[] = new String[liste.length];
        int h = 0;

        for (int i = 0; i < alphabet.length; i++) {  /** Compteur alphabet*/
            for (int p = 0; p < liste.length; p++) {    /** Compteur liste*/
                if (alphabet[i].equals(liste[p].substring(0, 1))){ /** Si un mot de la liste commence par  "a" comme première lettre alors le marqué dnas le tableau*/
                    liste_tri[h] = liste[p];
                    h++;                /** Incrémentation de l'index liste_trie*/
                }
                else {
                }
            }
        }
        System.out.print("Liste trié :");
        for (int t = 0; t < liste_tri.length; t++) {
            System.out.print(liste_tri[t] + " ");
        }

    }
}
