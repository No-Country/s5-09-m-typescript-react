import React from 'react';
import ImageUploading from 'react-images-uploading';
import { useUploadImage } from '../../hooks';

import { ImageSelected, BoxDragAndDrop} from './';

interface Props {
	url: React.Dispatch<React.SetStateAction<string>>;
}

export const DragAndDrop = ({ url }: Props) => {
	const { urlImage, handleChange, images, ...rest } = useUploadImage();

	if (urlImage) {
		url(urlImage);
	}

	return (
		<>
			<ImageUploading
				multiple={false}
				value={images}
				onChange={handleChange}
				maxNumber={1}
			>
				{({
					imageList,
					onImageUpload,
					dragProps,
					isDragging,
					onImageRemove,
				}) => (
					<>
						{imageList[0] ? (
							<ImageSelected
								{...{ onImageRemove, ...rest }}
								img={imageList[0].dataURL!}
							/>
						) : (
							<BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
						)}
					</>
				)}
			</ImageUploading>
		</>
	);
};
