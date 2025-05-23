import { BaseEdge, type EdgeProps, getSimpleBezierPath } from '@xyflow/react';

export const TemporaryEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) => {
  const [edgePath] = getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          strokeDasharray: '5, 5',
          strokeWidth: 1.5,
        }}
      />
    </>
  );
};
