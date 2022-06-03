<script>
export default {
  data: (vm) => ({
    items: [],
	comments: [],
  }),
  async created() {
    this.items = await fetch(`http://localhost:5002/posts`).then((e) =>
      e.json()
    );
	 this.comments = await fetch(`http://localhost:5002/comments`).then((e) =>
      e.json()
    );
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="pa-0">
            <NavigationBar />
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col>
            <TopBannerBackgroundLight />
            <BannerLink />
            <BannerPersonal />
            <CategorieTekst />
          </v-col>
        </v-row>
		<v-row>
          <v-col>
              <Title class="pt-10 pb-5">Overzicht van je rewards</Title>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus.
				<br />
				<br />
          </v-col>
        </v-row>

     
        <v-row>
          <v-col :sm="4" class="col-8">
            <FeaturedCard>
              <FeaturedCardTop>
                <div>Persoonlijke Punten</div>
                <FeaturedCardStat>32</FeaturedCardStat>
              </FeaturedCardTop>
              <v-card-text>
                <Badge />
                <h1 class="text-center">Behaalde punten</h1>
              </v-card-text>
              <dateField />
              <br />
              <hr />

              <v-row v-for="(comment, index) in comments" :key="index">
                <v-col :md="2" class="pa-0 col-2">
                  <BadgeAchievements>{{comment.count}}</BadgeAchievements>
                </v-col>
                <v-col :md="10" class="pa-0">
                  <v-card-text class="pl-9">
                    <h4>{{comment.achievement}}</h4>
                    <p>{{comment.action}}</p>
                    <hr />
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
                  wat geholpen worden. Een zin zoals deze is een goede manier om
                  ze op weg te helpen.
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="12" md="4" v-for="(item, index) in items" :key="index">
                <LearnCard>
                  <LearnCardTop :item="item"> </LearnCardTop>
                  <BadgeLearn :item="item" />
                  <p class="text-center">{{item.progress}} / 5 voltooid</p>
                  <ProgressBar :item="item"/>
                  <v-card-text>
                    <h1 class="text-center pb-3">{{item.title}}</h1>
                    <p class="text-center pt-3">
                      {{item.message}}
                    </p>
                  </v-card-text>
                  <LearnCardBottom> {{item.update}}</LearnCardBottom>
                </LearnCard>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>


</style>