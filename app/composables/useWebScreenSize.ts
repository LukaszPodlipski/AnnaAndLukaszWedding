export default () => {
  const viewport = useViewport();
  const isWebWidth = computed(() => viewport.isGreaterThan('md'));
  const isMobileWidth = computed(() => viewport.isLessThan('sm'));

  return { isWebWidth, isMobileWidth };
};
