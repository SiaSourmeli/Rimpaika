import { Gallery } from "react-grid-gallery";

function SelectedWork () {
    const images = [
        {
           src: "https://ucarecdn.com/6cbb2076-86ff-4f50-99bf-1c773927a53f/",
           caption: "1.untitled_200x180",
        },
      
        {
           src: "https://ucarecdn.com/65edf241-dcd6-4cef-8a4f-4a6b063a6857/",
           caption: "2.untitled_205x180.jpg",
        },
      
        {
           src: "https://ucarecdn.com/a7fe61f6-4e28-439c-88fa-19d26ad5b81e/",
           caption: "3.untitled_400X200.jpg",
         },
      
        {
          src: "https://ucarecdn.com/ada478e6-31bd-415c-a53c-728691901732/",
          caption: "4. untitled_200x300.JPG",
       },
      
       {
        src: "https://ucarecdn.com/86c6233c-b785-4f5e-a326-b2ab14daf5c8/5untitled_180x1801.jpg",
        caption: "5.untitled_180x180 (1).jpg",
      },
      
      {
        src: "https://ucarecdn.com/ac85c735-8178-48db-9e74-93539f05f684/-/preview/500x500/-/quality/smart_retina/-/format/auto/",
        caption: "6.untitled_180x180 (2).jpg",
      },
      
      {
        src: "https://ucarecdn.com/062b1172-e29c-4f69-a4d7-645df248da10/-/preview/500x500/-/quality/smart_retina/-/format/auto/",
        caption: "7.untitled_180x180 (3).jpg",
      },
      ];
      
    return (
        <div id="selected-work" >
            <h3>SELECTED WORK</h3>
      
            <div><Gallery images={images} /></div>
        </div>
    )
}
export default SelectedWork;