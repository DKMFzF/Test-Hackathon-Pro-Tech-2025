import { useEffect, useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterSubmit = {
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

/**
 * хук для того что бы отправить жанные с кнопки по нажатию enter
 */

export const useEnterSubmit = ({ onChange, option }: UseEnterSubmit) => {
	const optionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const optionHtml = optionRef.current;

		if (!optionHtml) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionHtml && event.key === 'Enter') {
				onChange?.(option);
			}
		};

		optionHtml.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			optionHtml.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, option]);
};
