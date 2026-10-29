import { Topic, Scholar } from '../types';
import { topicsPart1 } from './topics_part1';
import { topicsPart2 } from './topics_part2';
import { topicsPart3 } from './topics_part3';

export const allTopics: Topic[] = [
  ...topicsPart1,
  ...topicsPart2,
  ...topicsPart3
];

// Helper to extract unique scholars with their topic associations
export function getAllScholars(): (Scholar & { topicId: number })[] {
  const map = new Map<string, Scholar & { topicId: number }>();
  for (const topic of allTopics) {
    for (const scholar of topic.scholars) {
      if (!map.has(scholar.id)) {
        map.set(scholar.id, { ...scholar, topicId: topic.id });
      }
    }
  }
  return Array.from(map.values());
}
