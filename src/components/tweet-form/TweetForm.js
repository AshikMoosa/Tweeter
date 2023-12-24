const renderTweetForm = `
<div class="tweet-form">
  <form action="#">
    <div class="form-container">
      <h2 class="title">Tweet something</h2>
      <hr>
      <div class="content">
        <img class="profile-img" src="/assets/profile1.jpg" alt="profile-img">
        <div class="content-controls">
          <textarea placeholder="What's happening?" name="tweet-area" class="tweet-area" id="tweet-area"></textarea>
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
`;

export default renderTweetForm;
