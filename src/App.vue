<template>
  <v-app>
    <v-main>
      <v-container>
		  <v-row>
			  <v-col>
				  <NavigationBar />
		  <TopBannerBackgroundLight />
		  
		  </v-col>
        </v-row>
	
        <Title>Overzicht van je rewards</Title>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.
        <br />
		<br />
        <v-row>
          <v-col :sm="4" >
            <FeaturedCard>
              <FeaturedCardTop>
                <div>Persoonlijke Punten</div>
                <FeaturedCardStat>32</FeaturedCardStat>
              </FeaturedCardTop>
              <v-card-text>
                <Badge />
                <h1 class="text-center">Behaalde punten</h1>
              </v-card-text>
			  <hr />
			  <v-row v-for="n in 3" :key="n">
				  <v-col cols="2" class="pa-0">
                <BadgeAchievements />
				</v-col>
				<v-col cols="10" class="pa-0">
			  <v-card-text>
                <h4>Inloggen</h4>
				<p>Eerste keer ingelogd</p>
              </v-card-text>
			  </v-col>
			  </v-row>
			  
			  
            </FeaturedCard>
          </v-col>
          <v-col>
            <v-row>
              <v-col :cols="12" md="auto grow">
                
                  <Title>Behaalde Badges</Title>
                  <p>
                    Sommige gebruikers weten niet wat coaches doen dus moeten ze
                    wat geholpen worden. Een zin zoals deze is een goede manier
                    om ze op weg te helpen.
                  </p>
                
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="12" md="4" v-for="n in 10" :key="n">
                <LearnCard>
                  <LearnCardTop> </LearnCardTop>
				  <BadgeLearn />
				  <p class="text-center">2 / 5 voltooid</p>
					<ProgressBar/>
                  <v-card-text>
                    <h1 class="text-center">Leeractiviteiten</h1>
                    <p class="text-center">
                      Je hebt 2 van de 5 leeractiviteiten afgerond. Rond er 5 af
                      en verdien de bronze badge!
                    </p>
                  </v-card-text>
				  <LearnCardBottom>
					  
				  </LearnCardBottom>
                </LearnCard>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
		</v-content>
		</v-container>
      
    </v-main>
  </v-app>
</template>

