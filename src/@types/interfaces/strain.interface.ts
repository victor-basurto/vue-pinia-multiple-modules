export type StrainType = 'Hybrid' | 'Indica' | 'Sativa';
export interface IStrain {
	/**
	 * 1
	 */
	id: number;
	/**
	 * Product Brand
	 */
	brand: string;
	/**
	 * Product Name
	 */
	name: string;
	/**
	 * Product Image
	 */
	image: string;
	/**
	 * some description
	 */
	description: string;
	/**
	 * 40.0
	 */
	price: string;
	/**
	 * 2.5g
	 */
	strainWeight: string;
	/**
	 * 'Hybrid' | 'Indica' | 'Sativa';
	 */
	strainType: StrainType;
	/**
	 * 32.4%
	 */
	thcLevel: string;
	/**
	 * ['euphoria', 'arouse', 'focus']
	 */
	strainEffects: string[];
	/**
	 * ['cherry', 'dirt', 'strawberry']
	 */
	strainFlavors: string[];
	/**
	 * infuse
	 */
	rollType: string;
	/**
	 * 10
	 */
	rating: number;
}

export interface IStrainState {
	strains: IStrain[];
	currentStrain: IStrain;
	index: number;
	fetching: boolean;
	dataError: Partial<TypeError> | null;
}

export const state: IStrainState = {
	strains: [] as IStrain[],
	index: -1,
	currentStrain: {} as IStrain,
	fetching: false,
	dataError: {
		message: 'Bad Request'
	}
}
