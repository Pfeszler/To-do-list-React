import React from "react"
import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"

const Author = () =>
    <Container>
        <Header
            title="O Autorze" />
        <Section
            title="Paweł Feszler"
            body={
                <section>
                    <p>
                        Od początku tego roku poświęcam również czas na naukę programowania.
                        Mój główny zakres zainteresowań w tej kwestii to technologie front-endowe ze szczególnym wskazaniem na javascript es6 oraz react.
                        Obecnie uczestniczę w kursie "Frontend developer od podstaw" na https://youcode.pl/ oraz uczę się samodzielnie
                    </p>
                    <p>
                        Link do profilu github:<br />
                        https://github.com/Pfeszler/
                    </p>
                    <p>Od lat, z sukcesami, pracuję w sprzedaży. Największe doświadczenie mam w branży telekomunikacyjnej.</p>
                </section>
            }
        />
    </Container>
export default Author