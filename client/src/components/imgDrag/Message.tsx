interface Props {
	urlImage: string | null;
}

export const Message = ({ urlImage }: Props) => {
	return (
		<>
			{urlImage && (
				<span className='url-cloudinary-sumbit'>
					Your Image uploaded successfully <a href={urlImage}>click</a>
				</span>
			)}
		</>
	);
};
