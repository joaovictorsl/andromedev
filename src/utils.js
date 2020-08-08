const getCategoryLabel = (category) => {
    switch(category) {
		case 'none':
			return null
		case 'lab':
			return 'Laboratório de pesquisa e desenvolvimento da UFCG'
		case 'partner':
			return 'Organização parceira da OpenDevUFCG'
		case 'supported':
			return 'Organização apoiada por alguma das organizações parceiras'
		case 'stars':
			return 'Organização com repositório opensource com mais de 100 stars'
		default:
			return null
	}
}

export { getCategoryLabel }