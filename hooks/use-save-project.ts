'use client';

import { updateProjectAction } from '@/app/actions/project/update';
import { handleError } from '@/lib/error/handle';
import {
  type Node,
  getNodesBounds,
  getViewportForBounds,
  useReactFlow,
} from '@xyflow/react';
import { domToJpeg } from 'modern-screenshot';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useUser } from './use-user';

const SAVE_TIMEOUT = 1000;

const getScreenshot = async (nodes: Node[]) => {
  const nodesBounds = getNodesBounds(nodes);
  const viewport = getViewportForBounds(nodesBounds, 1200, 630, 0.5, 2, 16);

  const image = await domToJpeg(
    document.querySelector('.react-flow__viewport') as HTMLElement,
    {
      width: 1200,
      height: 630,
      style: {
        width: '1200px',
        height: '630px',
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    }
  );

  return image;
};

export const useSaveProject = (projectId: string) => {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const user = useUser();
  const rfInstance = useReactFlow();

  const save = useDebouncedCallback(async () => {
    if (isSaving || !user?.id || !projectId) {
      return;
    }

    try {
      if (!rfInstance) {
        throw new Error('No instance found');
      }

      setIsSaving(true);

      const content = rfInstance.toObject();
      // const image = await getScreenshot(rfInstance.getNodes());
      // const screenshot = await uploadFile(
      //   new File([image], 'screenshot.jpg', { type: 'image/jpeg' }),
      //   'screenshots',
      //   `${projectId}.jpg`
      // );

      const response = await updateProjectAction(projectId, {
        // image: screenshot.url,
        content,
      });

      if ('error' in response) {
        throw new Error(response.error);
      }

      setLastSaved(new Date());
    } catch (error) {
      handleError('Error saving project', error);
    } finally {
      setIsSaving(false);
    }
  }, SAVE_TIMEOUT);

  return { isSaving, lastSaved, save };
};
