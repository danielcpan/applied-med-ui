import React from 'react';
import { Global, css } from '@emotion/core';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import { Hidden } from '@material-ui/core';
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';

const defaultUppyConfig = {
  autoProceed: true,
  restrictions: {
    maxNumberOfFiles: 5,
    allowedFileTypes: ['.pdf']
  }
};

const defeaultUppy = Uppy(defaultUppyConfig);

const defaultConfig = {
  height: 225,
  hideUploadButton: true,
  locale: {
    strings: {
      dropPaste: 'Drop files here or %{browse}'
    }
  }
};

const Upload = ({ id = 'upload', uppy = defeaultUppy, ...restProps }) => {
  const config = { ...defaultConfig, ...restProps };

  return (
    <>
      <Hidden smUp>
        <Global
          styles={css`
            .uppy-Dashboard-inner {
              border: 1px dashed #eaeaea;
            }
            [data-uppy-drag-drop-supported='true'] .uppy-Dashboard-AddFiles {
              border: none;
            }
          `}
        />
        <Dashboard id={`mobile-${id}`} uppy={uppy} {...config} />
      </Hidden>

      <Hidden xsDown>
        <Global
          styles={css`
            .uppy-Dashboard-inner {
              border: 1px dashed #eaeaea;
              background-color: white;
            }
            [data-uppy-drag-drop-supported='true'] .uppy-Dashboard-AddFiles {
              border: none;
            }
          `}
        />
        <Dashboard id={`desktop-${id}`} uppy={uppy} {...config} />
      </Hidden>
    </>
  );
};

export default Upload;
