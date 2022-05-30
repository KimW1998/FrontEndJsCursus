<template>
  <v-app>
    <v-main>
      <v-container>
        <Title>Overzicht van je rewards</Title>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.

        <v-row>
          <v-col :sm="12"  style="max-width: 285px">
            <FeaturedCard>
              <FeaturedCardTop>
                <div>Lorem ipsum dolor</div>
                <FeaturedCardStat>32</FeaturedCardStat>
              </FeaturedCardTop>
              <v-card-text>
                <Badge />
                <h1>Behaalde punten</h1>
              </v-card-text>
            </FeaturedCard>
          </v-col>
          <v-col>
            <v-row>
                <v-col :cols="12" md="auto grow">
                  <v-card> content </v-card>
                </v-col>
            </v-row>
            <v-row>
              <v-col :cols="12" md="auto grow"  v-for="n in 3" :key="n">
            <LearnCard>
              <LearnCardTop>
                <div>Lorem ipsum dolor</div>
                <LearnCardStat>32</LearnCardStat>
              </LearnCardTop>
               <v-card-text>
                <Badge />
                <h1>Behaalde punten</h1>
               </v-card-text>
            </LearnCard>
            </v-col>
            </v-row>
            </v-col>
            
            
          
        </v-row>
        
      </v-container>
    </v-main>
  </v-app>
</template>