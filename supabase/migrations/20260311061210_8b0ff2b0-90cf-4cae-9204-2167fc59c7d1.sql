CREATE OR REPLACE FUNCTION public.validate_order_input()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF length(NEW.customer_name) > 100 OR length(trim(NEW.customer_name)) = 0 THEN
    RAISE EXCEPTION 'customer_name must be between 1 and 100 characters';
  END IF;
  
  IF length(NEW.customer_phone) > 15 OR length(trim(NEW.customer_phone)) = 0 THEN
    RAISE EXCEPTION 'customer_phone must be between 1 and 15 characters';
  END IF;
  
  IF length(NEW.customer_address) > 300 OR length(trim(NEW.customer_address)) = 0 THEN
    RAISE EXCEPTION 'customer_address must be between 1 and 300 characters';
  END IF;
  
  IF NEW.notes IS NOT NULL AND length(NEW.notes) > 200 THEN
    RAISE EXCEPTION 'notes must be 200 characters or less';
  END IF;
  
  IF NEW.quantity < 1 OR NEW.quantity > 999 THEN
    RAISE EXCEPTION 'quantity must be between 1 and 999';
  END IF;
  
  IF length(NEW.product_name) > 200 OR length(trim(NEW.product_name)) = 0 THEN
    RAISE EXCEPTION 'product_name must be between 1 and 200 characters';
  END IF;
  
  IF NEW.payment_method NOT IN ('COD', 'EasyPaisa', 'Bank Transfer') THEN
    RAISE EXCEPTION 'Invalid payment method';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_order_before_insert
  BEFORE INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_order_input();

CREATE TRIGGER validate_order_before_update
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_order_input();