<template>
<div>
    <h1>Auton kulutuksen laskuri</h1>

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

  <b-input-group prepend="Matka" append="km">
    <b-form-input v-model="matka"></b-form-input>
  </b-input-group>
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
        <b-button v-on:click="laske()">Laske kulutus ja matkan kesto</b-button>
        <p><br>Kulutus: {{this.kulutus}} l/100km</p>
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
                    <b-th>Litraa satasella: {{this.kulutus.toFixed(2).replace(/[.,]00$/, "")}} l</b-th>
                    <b-th>Litraa satasella: {{this.kulutus2.toFixed(2).replace(/[.,]00$/, "")}} l</b-th>
                  </b-tr>
                  <b-tr>
                    <b-th>Matkan kesto: {{this.kesto1}} tuntia</b-th>
                    <b-th>Matkan kesto: {{this.kesto2}} tuntia</b-th>
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
      matka: 0
    }
  },
  methods: {
    laske() {

      this.kulutus = this.selected;
      this.kulutus2 = this.selected;
      this.kesto1 = this.matka / this.vauhti;
      this.kesto2 = this.matka / this.vauhti2;
      this.matka;

      var i;
      var j;

      if(this.vauhti > 1){
        for (i=0; i < this.vauhti; i++){
        this.kulutus *= this.kulmakerroin;
        this.kesto1 = this.matka / this.vauhti
      } 
      } else {
        this.kulutus = this.selected;
      }

      if(this.vauhti2 > 1){
        for (j=0; j < this.vauhti2; j++){
        this.kulutus2 *= this.kulmakerroin;
      } 
      } else {
        this.kulutus2 = this.selected;
      }

    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
