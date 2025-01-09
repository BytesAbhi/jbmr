import React from 'react';
import './LiveStream.css';
import { useNavigate } from 'react-router-dom';

const LiveStream = () => {

  const navigate = useNavigate();

    const events = [
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/Afghanistan-Tour-of-Zimbabwe,_Vertical.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0FmZ2hhbmlzdGFuLVRvdXItb2YtWmltYmFid2UsX1ZlcnRpY2FsLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjozNzYsImhlaWdodCI6NTY4fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "event": "Afghanistan tour of...",
          "date": "11 Dec-06 Jan, 2025"
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/prod-images/2024/08/EFL_vertical_banner_2.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyNC8wOC9FRkxfdmVydGljYWxfYmFubmVyXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjM3NiwiaGVpZ2h0Ijo1Njh9LCJ3ZWJwIjp7InF1YWxpdHkiOjYwLCJsb3NzbGVzcyI6ZmFsc2V9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9",
          "event": "EFL Championship 2024-25",
          "date": "09 Aug-03 May, 2025"
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/Actor's-Cricket-Bash_Vertical.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0FjdG9yJ3MtQ3JpY2tldC1CYXNoX1ZlcnRpY2FsLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjozNzYsImhlaWdodCI6NTY4fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "event": "Actors Cricket Bash",
          "date": "16 Dec-22 Dec, 2024"
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/A-League-Men_Vertical_1728981450684.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0EtTGVhZ3VlLU1lbl9WZXJ0aWNhbF8xNzI4OTgxNDUwNjg0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjozNzYsImhlaWdodCI6NTY4fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "event": "A League 2024-25",
          "date": "18 Oct-31 May, 2025"
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/One-Day-Cup_Vertical-(1).jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL09uZS1EYXktQ3VwX1ZlcnRpY2FsLSgxKS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6Mzc2LCJoZWlnaHQiOjU2OH0sIndlYnAiOnsicXVhbGl0eSI6NjAsImxvc3NsZXNzIjpmYWxzZX19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0=",
          "event": "One Day Cup, 2024-25",
          "date": "22 Sep-01 Mar, 2025"
        }
      ];

  return (
    <div className='liveStream_container'>
      <div className='liveStrem_secondContainer'>
        <div className='write_txt'>
          <h2>POPULAR</h2>
          <span className='liveStream_txt'>LIVE STREAMING</span>
          <h1 className='liveStream_tours'>TOURS</h1>
          <button onClick={() => navigate("/schedule")} className='seeFullScheduleBtn'>
            SEE FULL SCHEDULE <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="live_feed">
          {
            events.map((data, idx) => {
              return (
                <div className='live_feed_item' key={idx}>
                  <div className="imageBox">
                    <img src={data.image} alt="liveStream" />
                  </div>
                  <div className="eventDetails">
                    <h5>{data.event}</h5>
                    <span className='liveStream_date'>{data.date}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default LiveStream;
