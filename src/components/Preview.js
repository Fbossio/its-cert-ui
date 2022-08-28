import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Preview = (props) => {
  const { cert_url } = props.props.props.certData.data;

  return (
    <>
      <Document file={cert_url} onLoadError={console.error}>
        <Page pageNumber={1} />
      </Document>
    </>
  );
};

export default Preview;
