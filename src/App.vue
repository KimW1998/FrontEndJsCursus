<template>
  <v-app>
    <v-main>
      <v-container>
		  <v-row>
			  <v-col>
		  <TopBannerBackgroundLight />
		  </v-col>
        </v-row>
        <Title>Overzicht van je rewards</Title>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.

        <v-row>
          <v-col :sm="12" style="max-width: 285px">
            <FeaturedCard>
              <FeaturedCardTop>
                <div>Lorem ipsum dolor</div>
                <FeaturedCardStat>32</FeaturedCardStat>
              </FeaturedCardTop>
              <v-card-text>
                <Badge />
                <h1 class="text-center">Behaalde punten</h1>
              </v-card-text>
			  <hr />
			  <v-card-text>
                <BadgeAchievements />
                <h4 class="text-center">Inloggen</h4>
				<br />
				<p class="text-center">Eerste keer ingelogd</p>
              </v-card-text>
			  <hr />
			  <v-card-text>
                <BadgeAchievements />
                <h4 class="text-center">Profiel</h4>
				<br />
				<p class="text-center">Eerste</p>
              </v-card-text>
			  <hr />
			  <v-card-text>
                <BadgeAchievements />
                <h4 class="text-center">Comment</h4>
				<br />
				<p class="text-center">Comment bij een thema</p>
              </v-card-text>
            </FeaturedCard>
          </v-col>
          <v-col>
            <v-row>
              <v-col :cols="12" md="auto grow">
                <v-card>
                  <h1>Behaalde Badges</h1>
                  <p>
                    Sommige gebruikers weten niet wat coaches doen dus moeten ze
                    wat geholpen worden. Een zin zoals deze is een goede manier
                    om ze op weg te helpen.
                  </p>
                </v-card>
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
      </v-container>
    </v-main>
  </v-app>
</template>