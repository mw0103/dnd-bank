<template>
    <div class="card">
        <header class="card-header">
    <p class="card-header-title">
      {{campaign.title}}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      {{campaign.description}}
      <br>
      <p>Players in campaign" {{ campaign.characters.length }}</p>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Join</a>
    <a href="#" v-if="user.userId == campaign.dmId" class="card-footer-item">Edit</a>
    <a href="#" v-if="user.userId == campaign.dmId" class="card-footer-item">Delete</a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Campaign } from '@/types/Campaign';
import { useUserStore } from '@/stores/UserStore';
export default defineComponent({
    name: "CampaignCard",
    setup() {
        const user = useUserStore();
        return {user
        }
    },
    props: {
        campaign: Object as () => Campaign,
    },
    methods: {
        GoToCampaignView() {
            this.$router.push({ name: 'CampaignView', params: { campaignId: this.campaign.id } });
        }
    }
});
</script>