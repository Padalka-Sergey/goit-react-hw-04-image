// import PropTypes from 'prop-types';

import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// export function ImageGallery({ ...otherProps }) {
export function ImageGallery({
  textForm,
  setDataQty,
  status,
  statusFunc,
  page,
  setPage,
  error,
  responseData,
  openModal,
}) {
  return (
    <>
      <ImageList>
        {/* <ImageGalleryItem {...otherProps} /> */}
        <ImageGalleryItem
          textForm={textForm}
          setDataQty={setDataQty}
          status={status}
          statusFunc={statusFunc}
          page={page}
          setPage={setPage}
          error={error}
          responseData={responseData}
          openModal={openModal}
        />
      </ImageList>
    </>
  );
}

// ==================================
//  <>
//    <ImageList>
//      {parsedData.map(({ id, webformatURL, tags, largeImageURL }) => (
//        <ImageGalleryItem
//          onFetchTotal={setDataQty}
//          textForm={textForm}
//          statusFunc={setStatus}
//          status={status}
//          page={page}
//          setPage={setPage}
//          setResponseData={setResponseData}
//          responseData={responseData}
//        />
//      ))}
//    </ImageList>
//  </>;

//  <ImageList>
//         {parsedData &&
//           parsedData.map(({ id, webformatURL, tags, largeImageURL }) => (
//             <ImageGalleryItem
//               key={id}
//               onFetchTotal={setDataQty}
//               textForm={textForm}
//               statusFunc={setStatus}
//               status={status}
//               page={page}
//               setPage={setPage}
//               setResponseData={setResponseData}
//               responseData={responseData}
//               id={id}
//               webformatURL={webformatURL}
//               tags={tags}
//               largeImageURL={largeImageURL}
//             />
//           ))}
//         {status === 'resolved' &&
//           responseData.map(({ id, webformatURL, tags, largeImageURL }) => (
//             <ImageGalleryItem
//               key={id}
//               onFetchTotal={setDataQty}
//               textForm={textForm}
//               statusFunc={setStatus}
//               status={status}
//               page={page}
//               setPage={setPage}
//               setResponseData={setResponseData}
//               responseData={responseData}
//               id={id}
//               webformatURL={webformatURL}
//               tags={tags}
//               largeImageURL={largeImageURL}
//             />
//           ))}
//       </ImageList>
//     </>
//   );
// }

// export function ImageGallery({
// textForm,
// setDataQty,
// status,
// page,
// setPage,
// statusFunc,
//   ...otherProps
// }) {
//   return (
//     <>
//       <ImageList>
//         <ImageGalleryItem
// onFetchTotal={setDataQty}
// textForm={textForm}
// status={status}
// statusFunc={statusFunc}
// page={page}
// setPage={setPage}
//           {...otherProps}
//         />
//       </ImageList>
//     </>
//   );
// }
