const { Task } = require('@dotcom-tool-kit/types');
const { exec } = require('child_process');
const { hookFork, waitOnExit } = require('@dotcom-tool-kit/logger');

class RunStorybook extends Task {
	async run() {
		this.logger.info('running storybook');

		const child = await exec('storybook dev -p 5005');
		hookFork(this.logger, 'storybook', child);
		return waitOnExit('storybook', child);
	}
}

RunStorybook.description = 'Run storybook';

exports.tasks = [RunStorybook];
