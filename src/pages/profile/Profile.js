const renderProfilePage = `

<section class="profile-page">
  <section class="main">
    <div class="cover-image">
      <img src="/src/assets/profile-cover.jpg" alt="cover-img">
    </div>
    <div class="user-profile">
      <div class="user-image">
        <img src="/src/assets/profile1.jpg" alt="user-image">
      </div>
      <div class="user-info">
        <div class="user-details">
          <div class="details-container">
            <h2 class="title">Cristina Neal</h2>
            <span class="following-count"><b>2569</b> Following</span>
            <span class="follower-count"><b>10.8K</b> Followers</span>
          </div>


          <div class="user-description">
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </div>
        </div>
        <button type="button" class="follow-button"><i
            class="fa-solid fa-user-plus fa-flip-horizontal"></i>Follow</button>

      </div>
    </div>
  </section>
  <section class="bookmarks" style="border: 1px solid black;">
    <span>this is bookmark section</span>
  </section>
</section>
`;

export default renderProfilePage;
