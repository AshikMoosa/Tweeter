const renderHeader = `
<section class="header">
  <div class="logo">
    <a href="/">
      <img src="/src/assets/tweeter.svg" alt="tweeter-logo">
    </a>
  </div>

  <!-- Navigation -->
  <nav class="navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/explore">Explore</a></li>
      <li><a href="/bookmarks">Bookmarks</a></li>
    </ul>
  </nav>

  <!-- Profile -->
  <div class="profile-menu">
    <div class="profile-info">
      <img src="/src/assets/profile1.jpg" class="profile-img" alt="profile-img">
      <h2 class="profile-name">Cristina Neal</h2>
      <span class="drop-icon">
        <i class="fa-solid fa-caret-down"></i>
      </span>
    </div>

    <div class="profile-card" hidden>
      <ul>
        <li>
          <span class="icon"><i class="fa-solid fa-circle-user"></i></span>
          <span class="title">My Profile</span>
        </li>
        <li>
          <span class="icon"><i class="fa-solid fa-user-group"></i></span>
          <span class="title">Group Chat</span>
        </li>
        <li>
          <span class="icon"><i class="fa-solid fa-gear"></i></span>
          <span class="title">Settings</span>
        </li>
        <hr>
        <li>
          <span class="icon"><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
          <span class="title">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</section>
`;

export default renderHeader;
