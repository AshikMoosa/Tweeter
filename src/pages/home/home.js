const renderHomePage = `
<section class="home-page">
  <section class="main">
    <div id="tweet-form-container">
      <div class="tweet-form">
        <form action="#">
          <div class="form-container">
            <h2 class="title">Tweet something</h2>
            <hr>
            <div class="content">
              <img class="profile-img" src="/src/assets/profile1.jpg" alt="profile-img">
              <div class="content-controls">
                <textarea placeholder="What's happening?" name="tweet-area" class="tweet-area"
                  id="tweet-area"></textarea>
                <div class="control-actions">
                  <div class="left-cta">
                    <span class="upload-media" id="uploadMedia"><i class="fa-regular fa-image"></i></span>
                    <input type="file" id="fileInput" style="display:none">
                    <span class="reply-actions">
                      <span class="icon"><i class="fa-solid fa-earth-asia"></i></span>
                      <span class="title">Everyone can reply</span>
                    </span>
                    <div class="reply-card" hidden>
                      <h2>Who can reply</h2>
                      <p>Choose who can reply to this Tweet.</p>
                      <ul>
                        <li>
                          <span class="icon"><i class="fa-solid fa-earth-asia"></i></span>
                          <span class="title">Everyone</span>
                        </li>
                        <li>
                          <span class="icon"><i class="fa-solid fa-user-group"></i></span>
                          <span class="title">People you follow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button type="button">Tweet</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="tweet-card-container">

      <div class="tweet-card">
        <div class="profile-info">
          <img src="/src/assets/profile1.jpg" alt="profile-img" class="profile-img">
          <div class="profile-details">
            <span class="name">Cristina Neal</span>
            <span class="time-stamp">24 August at 20:43</span>
          </div>
        </div>


        <div class="tweet-cover-info">
          <p class="tweet-description">“We travel, some of us forever, to seek other places, other lives, other souls.”
            –
            Anais Nin</p>
          <img src="/src/assets/profile-cover.jpg" alt="cover-img" class="cover-img">
          <div class="cover-details">
            <span class="comments-count">449 Comments</span>
            <span class="retweets-count">59k Retweets</span>
            <span class="saved-count">234 Saved</span>
          </div>
          <div class="cover-controls">
            <button class="comment"><i class="fa-regular fa-message fa-flip-horizontal"></i>Comment</button>
            <button class="retweet"><i class="fa-solid fa-retweet"></i>Retweet</button>
            <button class="like"><i class="fa-regular fa-heart"></i>Like</button>
            <button class="save"><i class="fa-regular fa-bookmark"></i>Save</button>
          </div>
        </div>

        <div class="tweet-reply-container">
          <div class="tweet-reply-form">
            <img src="/src/assets/profile1.jpg" alt="profile-img" class="profile-img">
            <div class="tweet-reply-control-container">
              <input type="text" placeholder="Tweet your reply" class="tweet-reply-input" name="tweet-reply-control"
                id="tweet-reply-control">
              <button class="upload-media" id="uploadMedia"><i class="fa-regular fa-image"></i></button>
              <input type="file" id="fileInput" style="display:none">
            </div>
          </div>

          <div class="tweet-reply-item">
            <img src="/src/assets/profile1.jpg" alt="profile-img" class="profile-img">
            <div class="reply-content">
              <div class="reply-profile-info">
                <span class="name">Cristina Neal</span>
                <span class="time-stamp">24 August at 20:43</span>
              </div>
              <div class="reply-msg">
                <p class="reply-msg-description">I’ve seen awe-inspiring things that I thought I’d never be able to
                  explain
                  to another person.</p>
                <img src="/src/assets/profile-cover.jpg" alt="reply-cover" class="reply-msg-cover">
              </div>
              <div class="reply-controls">
                <button class="like"><i class="fa-regular fa-heart"></i>Like</button>
                <span class="likes-count">12k Likes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <aside class="sidebar">
    <div id="trends-container">
      <div class="trends">
        <h2 class="title">Trends for you</h2>
        <hr>
        <ul>
          <li class="trends-list-item">
            <h3>#programming</h3>
            <p>213k Tweets</p>
          </li>
          <li class="trends-list-item">
            <h3>#devchallenges</h3>
            <p>123k Tweets</p>
          </li>
          <li class="trends-list-item">
            <h3>#frontend</h3>
            <p>34k Tweets</p>
          </li>
          <li class="trends-list-item">
            <h3>#helsinki</h3>
            <p>11k Tweets</p>
          </li>
          <li class="trends-list-item">
            <h3>#100DaysOfCode</h3>
            <p>5k Tweets</p>
          </li>
          <li class="trends-list-item">
            <h3>#learntocode</h3>
            <p>1k Tweets</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="recommendations-container">

      <div class="recommendations">
        <h2 class="title">Who to follow</h2>
        <div class="recommendation-item">
          <hr>
          <div class="profile-info">
            <div class="profile-details">
              <img src="/src/assets/profile1.jpg" alt="profile-img" class="profile-img">
              <div>
                <p class="name">Mikael Stanley</p>
                <p class="follower-count">230k followers</p>
              </div>
            </div>
            <button type="button" class="follow-button"><i
                class="fa-solid fa-user-plus fa-flip-horizontal"></i>Follow</button>
          </div>
          <p class="profile-description">Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
          <img src="/src/assets/profile-cover.jpg" alt="profile-cover-img" class="profile-cover">
        </div>
        <div class="recommendation-item">
          <hr>
          <div class="profile-info">
            <div class="profile-details">
              <img src="/src/assets/profile1.jpg" alt="profile-img" class="profile-img">
              <div>
                <p class="name">Mikael Stanley</p>
                <p class="follower-count">230k followers</p>
              </div>
            </div>
            <button type="button" class="follow-button"><i
                class="fa-solid fa-user-plus fa-flip-horizontal"></i>Follow</button>
          </div>
          <p class="profile-description">Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
          <img src="/src/assets/profile-cover.jpg" alt="profile-cover-img" class="profile-cover">
        </div>

      </div>
    </div>
  </aside>
</section>
`;

export default renderHomePage;
