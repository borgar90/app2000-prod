const VideosTabContent = () => {
  const videos = [
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid1.mov",
    },
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid2.mp4",
    },
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid3.mp4",
    },
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid1.mov",
    },
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid2.mp4",
    },
    {
      poster: "https://picsum.photos/500/400",
      src: "assets/video/Borgar/MyVideoes/vid3.mp4",
    },
  ];

  return (
    <div className="tab-pane fade show active" id="videos" role="tabpanel">
      <div className="iq-card-body p-0 w-[100%]">
        <ul className="grid grid-cols-2">
          {videos.map((video, index) => (
            <li key={index} className="grid-item mt-5" style={{ width: "100%" }}>
              <a href="javascript:void();">
                <div className="video-block position-relative">
                  <h2 className="mb-5">Video name {index}</h2>
                  <video
                    className="img-fluid w-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={video.poster}
                    src={video.src}
                  ></video>
                  <div className="video-play-icon">
                    <i className="ri-play-fill"></i>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default VideosTabContent;
