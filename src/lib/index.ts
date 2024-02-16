// place files you want to import through the `$lib` alias in this folder.
export interface EachBallOption {
	runs: number;
	label: String;
	extras: number;
	isWicket: boolean;
	isWide: boolean;
	isNoBall: boolean;
}

export interface Over{
    balls: EachBallOption[];
}

export let options = [
    {
        runs: 0,
        label: "0",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 1,
        label: "1",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 2,
        label: "2",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 3,
        label: "3",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 4,
        label: "4",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 6,
        label: "6",
        extras: 0,
        isWicket: false,
        isWide: false,
        isNoBall: false
    },
    {
        runs: 0,
        label: "Wide",
        extras: 1,
        isWicket: false,
        isWide: true,
        isNoBall: false
    },
    {
        runs: 0,
        label: "No Ball",
        extras: 1,
        isWicket: false,
        isWide: false,
        isNoBall: true
    },
    {
        runs: 0,
        label: "Wicket",
        extras: 0,
        isWicket: true,
        isWide: false,
        isNoBall: false
    }
];

export function generateBallLabel(option: EachBallOption) {
	let label = '';
    let runs = option.runs > 0 ? '+ '+option.runs.toString() : '';
	label = option.runs.toString();
	if (option.isNoBall) {
        label = 'Nb'+runs;
	} else if (option.isWicket) {
        label = 'W'+runs;
	} else if (option.isWide) {
        label = 'Wd'+runs;
	} else {
        label = option.runs.toString();
    }

	return label;
}

export function getCurrentStatus(currentOver: number, currentBall:number, balls: EachBallOption[]) {
	let currentIndex = 0;
	for (let i = 0; i < currentBall; i++) {
		if (!balls[i].isNoBall && !balls[i].isWide) currentIndex += 1;
	}
    return currentOver.toString()+"."+(currentIndex+1).toString();
}
