var concerts = new Vue({
  el: '#concerts',
  data: {
    concerts: [
      {
        date: "Miércoles 11", events: [
          { band: "Gen", band_url: "https://www.facebook.com/GrupoGenCUU/", place: "Sold Out", address: "Perif de la juventud #7311", place_url: "https://www.facebook.com/SoldOutCUU", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/223185766_4319927921361588_7165313525323084308_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jqs9JBqyrggAX_uzlQz&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfD9pht20q9NLCsgGEfwESd0fVxKeD9o8DOEenD4GJxzxg&oe=63C4AD94", price: "", },
          { place: "Black Lion", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Lalo Ávila", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.6435-9/61835720_140263067151879_6131077797998755840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=53_Nf42kr-EAX-NcO-2&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCoVooQF_m3vYxaofx7MJKB-8OB1fXBE4O-ilE7R6wmBA&oe=63E71BE9", band_url: "https://www.facebook.com/lalo.avila.37017", price: "", },
        ]
      },
      {
        date: "Jueves 12", events: [
          { place: "ANGELS", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Antenna", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/295666053_114682084644093_7536792161319456711_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TF-P8n20CioAX-bmG4P&tn=SHAZxgS9eJCxB_DI&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCR2RISJrhjmzq55WLoh85pOWQqaOcHRz9RgigkUHfezA&oe=63C4F02A", band_url: "", price: "", },
          { place: "El CUERVO", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Tributo: Creedence Clearwater Revival (Yesterday)", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/325158094_2768101446656151_5570596788548806323_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CIImjk7HxGoAX-Z2RZV&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfC23uuLQ6DWq1aPqiLs9zSmqZ5diTHIfzjA6dGdL0POBw&oe=63C4E0B5", band_url: "", price: "$50", },
          { place: "SOLD OUT", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Voyager", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/306606423_527784916013994_6940610712859759736_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=63uwBclZwEwAX95n-lx&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCrBeEiO46sMErrvM2PB4235pss5AV7K-GODpHzh-JRNQ&oe=63C4752E", band_url: "", price: "", },
          { place: "CASA CERVECERA BOLÍVAR", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "F.O.R.", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/323629690_700028595070405_4359573322211223091_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qSY4RmOI828AX_15NCV&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfBPVQMjg7QAKoPiJ_8C5YYq9ko6eK4d-YEUvSCbWEOiTA&oe=63C3BC12", band_url: "", price: "", },
        ]
      },
      {
        date: "Viernes 13", events: [
          { place: "El CUERVO", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "McFly - Rock the Night", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/315400371_555153893278993_6626998930717584543_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=12qg7lV0U88AX8cO4O9&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCzZsj7wcvq2FBACHdej3XgPiiYL3c4sab8ydl9crjNXg&oe=63C4F277", band_url: "https://www.facebook.com/RecallCUU", price: "", },
          { place: "ANGELS", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: " Yesterday", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/325158094_2768101446656151_5570596788548806323_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CIImjk7HxGoAX-Z2RZV&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfC23uuLQ6DWq1aPqiLs9zSmqZ5diTHIfzjA6dGdL0POBw&oe=63C4E0B5", band_url: "https://www.facebook.com/profile.php?id=100075831792907", price: "", },
          { place: "SOLD OUT", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Recall", band_image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/323988597_1235655547333623_3810028743614536192_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WqcbfBJ-_1gAX_HbPQz&tn=SHAZxgS9eJCxB_DI&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCa_1978sn4HcfYKfEkLR_mj3EhVllKkc0ROjbEdXYxwg&oe=63C518EC", band_url: "", price: "", },
          { place: "ANGELS", address: "Paseo Vistas del Sol #6601", place_url: "https://www.facebook.com/blacklionchih", band: "Tributo: Judas Priest (Coventry) ", band_image: "https://d1fdloi71mui9q.cloudfront.net/iaaZbMlbQ1i6YTkpXMP9_1VsjCEJXL8CULxiv", band_url: "", price: "$150.00", },
          { place: "Privado ", address: "Paseo Vistas del Sol #6601", place_url: "https://maps.app.goo.gl/YkwnfZiE3AeqhFwF6", band: "Noche de Maldad (Horror Paradise / Catafalco / Rotten Flesh / Cadavre / Titan Dissector) ", band_image: "https://lamenteesmaravillosa.com/wp-content/uploads/2019/12/maldad-ser-humano.jpg", band_url: "", price: "", date: "$100, B.Y.O.B.", },
        ]
      }
    ]

  },
  template: `

  <div class="">
    <div class="row " v-for="concert in concerts">
      <div class="col">
        <h3 class="">
          {{concert.date}}
        </h3>
        <div class="card mb-3">
          <div class="card-body">
            <div class="divide-y">
              <div v-for="item in concert.events" v-cloak>
                <div class="row">
                  <div class="col-auto">
                  <a v-bind:href="item.band_url"  target="new">
                    <span class="avatar avatar-md" v-bind:style="{ backgroundImage: 'url(' + item.band_image + ')' }"></span>
                  </a>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <h2 class="mb-0"><a v-bind:href="item.band_url"  target="new">{{item.band}} </2></h3>
                      </div>
                      <div class="col-auto fs-3 text-green">
                        {{item.price}}  
                      </div>
                    </div>
                    <div class="mt-lg-0 list-inline list-inline mb-0 text-muted pt-3 ">
                      <div class="list-inline-item">
                        <!-- Download SVG icon from http://tabler-icons.io/i/building-community -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8">
                          </path>
                          <line x1="13" y1="7" x2="13" y2="7.01"></line>
                          <line x1="17" y1="7" x2="17" y2="7.01"></line>
                          <line x1="17" y1="11" x2="17" y2="11.01"></line>
                          <line x1="17" y1="15" x2="17" y2="15.01"></line>
                        </svg>
                        
                        <a v-bind:href="item.place_url" target="new" class="text-reset">{{item.place}}  </a>
                      </div>
                      <div class="list-inline-item">
                        <!-- Download SVG icon from http://tabler-icons.io/i/map-pin -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24"
                          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="12" cy="11" r="3"></circle>
                          <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                          </path>
                        </svg>
                        {{item.address}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   `
})


var places = new Vue({
  el: '#places',
  data: {
    places: [
      { name: "El Cuervo", address: "Teófilo Borunda #103", image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/276008226_5313325348726331_1057825076518943018_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=o4MBEpdNF3MAX-rdXJS&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfAVnVY3Lj3nYRdjNx8CmhF5Pk-L6ogsoqHauAZa0fsGgA&oe=63C51225", url: "" },
      { name: "Black Lion", address: "Paseo Vistas del Sol #6601", image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/321691781_3572473516309573_6483168560166260128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9EIg1f4lOzgAX-ITIuO&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCAVxC-Lna6Gb9nn3-cwnXJTphMBjok-WH3LPFZsEFJUw&oe=63C47389", url: "" },
      { name: "Angels", address: "Calle Aldama #3301", image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.6435-9/120648833_10164172025555484_658188226887352519_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FETURed6czUAX9ZaiKT&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfBc-MMbN2NHN4pip8AkRB9f8QEmgDvjGTAHgoMVCwQJ0Q&oe=63E701D1", url: "https://www.facebook.com/angelsrockbar" },
      { name: "Sold Out", address: "Perif de la juventud #7311", image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/278680137_5006180472781703_1659006954764262030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4PSQMRrFDcoAX9hY67K&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfB6pRAn9ju9B0y2BzEUUJoZ8esBDnwrTTWGUZsLBiok4w&oe=63C3ADAB", url: "" },
      { name: "Don Burro", address: "Perif de la juventud #7311", image: "https://scontent.fcuu2-1.fna.fbcdn.net/v/t39.30808-6/306281437_139551135466271_8599900390020043128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=agoG84hLVZgAX-NIMfe&_nc_ht=scontent.fcuu2-1.fna&oh=00_AfCXmlppPjxkg43jXp0s5ol-oEqJ2oF7eBlTg5PH84lLEA&oe=63C513E4", url: "https://www.facebook.com/profile.php?id=100082341557384" },
    ]
  },
  template: `

  <div class="row row-cards">
    <div class="col-sm-6 col-md-4 col-lg-3 " v-for="item in places">
      <div class="card card-sm">
        <a v-bind:href="item.url" class="d-block" target="new"><img style="height:200px" v-bind:src="item.image" class="card-img-top"></a>
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="row">
              <div class="col">
                <h3>
                  {{item.name}}
                </h3>
              </div>
              <div class="col-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                  </path>
                </svg>
                (614) 23 213 23
              </div>

              <div class="text-muted">
                
                {{item.address}}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

   `
})



