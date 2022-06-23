<template>
<div>
    <h1></h1>

      <b-jumbotron>
        <template #header>Auton kulutuksen laskuri</template>

        <template #lead>
          Solidabiksen 2021 koodihaaste. Valittu autotyyppi (A, B, C) ajaa käyttäjän määrittämän matkan eri nopeuksilla. Bensankulutus kasvaa 1.009 kulmakertoimella. Eli jos auton 
          nopeus kasvaa 1km/h, niin bensan kulutus kasvaa 1.009 kertaiseksi. <br><br> Auto A =  1km/h, Auto A kuluttaa 3l / 100km. <br>Vauhdissa 2km/h, Auto A kuluttaa 3 * 1.009 =  3.027l / 100km.
        </template>

        <p>
              Auto A: 3l / 100km<br>
              Auto B: 3.5l / 100km<br>
              Auto C: 4l / 100km
        </p>
      </b-jumbotron>
<hr class="my-4">

    <b-container>
      <p>Auton tyyppi:</p>
      <b-form-select  v-model="selected" 
                      :options="autot" 
                      text-field="nimi" 
                      value-field="kulutus"
                      style="padding:5px;"
      ></b-form-select><br><br>
      <div>
        Valitun autotyypin kulutus 1km/h: <br>{{selected}} l/100km
      </div>
    </b-container>

    <br>
    
    <b-container>
      <b-row>
        <b-col>
          <b-input-group prepend="Nopeus 1" append="km/h">
            <b-form-input v-model="vauhti"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group prepend="Nopeus 2" append="km/h">
            <b-form-input v-model="vauhti2"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>


  <br>
  

  <br>

  
    <b-row>
      <b-col>
        <b-input-group prepend="Matka" append="km" >
          <b-form-input v-model="matka"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col>
        <b-input-group prepend="Bensan hinta per litra" append="€/l" >
          <b-form-input v-model="bensahinta"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    
  
<br>
<div>
  <b-container>
    <b-row>
      <b-col>
        <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);">
          <p style="padding-top:5px;"><strong>Auto 1</strong></p>
          <b-table-simple hover small caption-top responsive>
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>Nopeus</b-th>
                  <b-th>Matka</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-th>{{vauhti}} km/h</b-th>
                  <b-th>{{matka}} km</b-th>
                </b-tr>
              </b-tbody>
          </b-table-simple>
        </div>
      </b-col>
      <b-col>
        <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);">
          <p style="padding-top:5px;"><strong>Auto 2</strong></p>
          <b-table-simple hover small caption-top responsive>
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>Nopeus</b-th>
                  <b-th>Matka</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-th>{{vauhti2}} km/h</b-th>
                  <b-th>{{matka}} km</b-th>
                </b-tr>
              </b-tbody>
          </b-table-simple>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8" center>
        <b-button v-on:click="laske()">Laske kulutus ja matkan kesto</b-button><br><br>
          <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);">
            <p style="padding-top:5px;"><strong>Kulutus</strong></p>
            <b-table-simple hover small caption-top responsive bordered fixed>
              <caption></caption>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th>Auto 1</b-th>
                    <b-th>Auto 2</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-th>Litraa satasella: {{this.kulutus.toFixed(2).replace(/[.,]00$/, "")}} l... ({{this.vertaaLitra1.toFixed(2).replace(/[.,]00$/, "")}}l)</b-th>
                    <b-th>Litraa satasella: {{this.kulutus2.toFixed(2).replace(/[.,]00$/, "")}} l... ({{this.vertaaLitra2.toFixed(2).replace(/[.,]00$/, "")}}l)</b-th>
                  </b-tr>
                  <b-tr>
                    <b-th>Matkan hinta: {{this.hinta1.toFixed(2).replace(/[.,]00$/, "")}} euroa... ({{this.vertaaHinta1.toFixed(2).replace(/[.,]00$/, "")}})</b-th>
                    <b-th>Matkan hinta: {{this.hinta2.toFixed(2).replace(/[.,]00$/, "")}} euroa... ({{this.vertaaHinta2.toFixed(2).replace(/[.,]00$/, "")}})</b-th>
                  </b-tr>
                  <b-tr>
                    <b-th>Matkan kesto: {{this.rtunnit1}} tuntia {{this.rminuutit1}} minuuttia ({{this.vertaaKesto1h}}h {{this.vertaaKesto1m}}min)</b-th>
                    <b-th>Matkan kesto: {{this.rtunnit2}} tuntia {{this.rminuutit2}} minuuttia ({{this.vertaaKesto2h}}h {{this.vertaaKesto2m}}min)</b-th> 
                  </b-tr>
                </b-tbody>
            </b-table-simple>
          </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>

</div>
  


</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 3, 
      autot: [
        {id: 1, nimi: "Auto A", kulutus: 3},
        {id: 2, nimi: "Auto B", kulutus: 3.5},
        {id: 3, nimi: "Auto C", kulutus: 4}
      ],
      kulmakerroin: 1.009,
      vauhti: 0,
      vauhti2: 0,
      kulutus: 0,
      kulutus2: 0,
      kesto1: 0,
      kesto2: 0,
      rtunnit1: 0,
      rtunnit2: 0,
      minuutit1: 0,
      minuutit2: 0,
      rminuutit1: 0,
      rminuutit2: 0,
      matka: 0,
      bensahinta: 0,
      hinta1: 0,
      hinta2: 0,
      kulunutbensa1: 0,
      kulunutbensa2: 0,
      vertaaLitra1: 0,
      vertaaLitra2: 0,
      vertaaHinta1: 0,
      vertaaHinta2: 0,
      vertaaKesto1h: 0,
      vertaaKesto2h: 0,
      vertaaKesto1m: 0,
      vertaaKesto2m: 0

    }
  },
  methods: {
    laske() {

      
      this.kulutus = this.selected;
      this.kulutus2 = this.selected;
      this.kesto1 = this.matka / this.vauhti;
      this.kesto2 = this.matka / this.vauhti2;
      this.matka;
      this.rtunnit1;
      this.rtunnit2;
      this.minuutit1;
      this.minuutit2;
      this.rminuutit1;
      this.rminuutit2;
      this.vertaaKesto1h;
      this.vertaaKesto2h;
      this.vertaaKesto1m;
      this.vertaaKesto2m;

      var i;
      var j;

      if(this.vauhti > 1){
        for (i=0; i < this.vauhti; i++){
        this.kulutus *= this.kulmakerroin;
      }
        this.hinta1 = this.kulutus / 100 * this.matka * this.bensahinta;
        this.kesto1 = this.matka / this.vauhti;
        this.rtunnit1 = Math.floor(this.kesto1);
        this.minuutit1 = (this.kesto1 - this.rtunnit1) * 60;
        this.rminuutit1 = Math.round(this.minuutit1);

      } 
      
      else {
        this.kulutus = this.selected;
      }

      if(this.vauhti2 > 1){
        for (j=0; j < this.vauhti2; j++){
        this.kulutus2 *= this.kulmakerroin;
      }
        this.hinta2 = this.kulutus2 / 100 * this.matka * this.bensahinta;
        this.kesto2 = this.matka / this.vauhti2;
        this.rtunnit2 = Math.floor(this.kesto2);
        this.minuutit2 = (this.kesto2 - this.rtunnit2) * 60;
        this.rminuutit2 = Math.round(this.minuutit2);

      } else {
        this.kulutus2 = this.selected;
      }

      if(this.kulutus > this.kulutus2){
        this.vertaaLitra1 = this.kulutus2 - this.kulutus;
        this.vertaaLitra2 = this.kulutus - this.kulutus2;
      } else {
        this.vertaaLitra1 = this.kulutus - this.kulutus2;
        this.vertaaLitra2 = this.kulutus2 - this.kulutus;
      }

      if(this.hinta1 > this.hinta2){
        this.vertaaHinta1 = this.hinta2 - this.hinta1;
        this.vertaaHinta2 = this.hinta1 - this.hinta2;
      } else {
        this.vertaaHinta1 = this.hinta1 - this.hinta2;
        this.vertaaHinta2 = this.hinta2 - this.hinta1;
      }

      /* if(this.kesto1 > this.kesto2){
        this.vertaaKesto1 = this.kesto1 - this.kesto2;
        this.vertaaKesto2 = this.kesto2 - this.kesto1;
      } else {
        this.vertaaKesto1 = this.kesto2 - this.kesto1;
        this.vertaaKesto2 = this.kesto1 - this.kesto2;
      } */

      if(this.kesto1 > this.kesto2){
        this.vertaaKesto1h = this.rtunnit1 - this.rtunnit2;
        this.vertaaKesto2h = this.rtunnit2 - this.rtunnit1;
        this.vertaaKesto1m = this.rminuutit1 - this.rminuutit2;
        this.vertaaKesto2m = this.rminuutit2 - this.rminuutit1;
      } else {
        this.vertaaKesto1h = this.rtunnit2 - this.rtunnit1;
        this.vertaaKesto2h = this.rtunnit1 - this.rtunnit2;
        this.vertaaKesto1m = this.rminuutit2 - this.rminuutit1;
        this.vertaaKesto2m = this.rminuutit1 - this.rminuutit2;
      }

      if(this.vertaaKesto1h == 0) {
        return this.vertaaKesto1m;
      } else if (this.vertaaKesto2h == 0) {
        return this.vertaaKesto2m;
      } else if (this.vertaaKesto1h !== 0) {
        return Math.abs(this.vertaaKesto1m);
      } else if (this.vertaaKesto2h !== 0) {
        return Math.abs(this.vertaaKesto2m)
      }

      //IF pelleilyä Math.abs() funktion kanssa. Jos matkojen kestojen erotus on tunneissa, ei tarvita vertailua minuuttien kohdalla. Välillä tulee "2h -20min" kaltaisia lukuja.
      //MUTTA jos matkojen kestojen erotus on vain minuuteissa, tarvitaan vertailu myös minuuteissa.
      //Pitää miettiä parempi implementaatio.

    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
