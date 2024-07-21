import { eventBus, localStorage, prefersDark } from "./_const.ts";
import type {
  ThemeSwitchEventsDef,
  ThemeSwitchEventsDefNoPayload,
  ThemeSwitchEvents,
  ThemeSwitchEventsNoPayload,
  Unsubscribe,
} from "./_types.ts";

class ThemeSwitchEventBus {
  constructor() {
    this.init();
  }

  /**
   * Initialize the event bus
   */
  init() {
    this.subscribe("SWITCH_LIGHT_THEME", (theme) => {
      if (!localStorage) return;
      localStorage.setItem("theme", theme);
    });

    this.subscribe("SWITCH_DARK_THEME", (theme) => {
      if (!localStorage) return;
      localStorage.setItem("theme", theme);
    });

    this.subscribe("SWITCH_SYSTEM_THEME", () => {
      if (!localStorage) return;
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    });
  }

  /**
   * Check if an Event is a CustomEvent
   * @param event
   */
  isCustomEvent(event: Event): event is CustomEvent {
    return "detail" in event;
  }

  /**
   * Publish an event with a payload
   * @param eventName
   * @param payload
   */
  publish<T extends ThemeSwitchEvents>(
    eventName: T,
    payload: ThemeSwitchEventsDef[T],
  ): void {
    const event = payload
      ? new CustomEvent(eventName, { detail: payload })
      : new CustomEvent(eventName);
    eventBus.dispatchEvent(event);
  }

  /**
   * Publish an event with no payload
   * @param eventName
   */
  publishNoPayload<T extends ThemeSwitchEventsNoPayload>(eventName: T): void {
    const event = new CustomEvent(eventName);
    eventBus.dispatchEvent(event);
  }

  /**
   * Subscribe to an event
   * @param eventName
   * @param callback
   */
  subscribe<T extends ThemeSwitchEvents>(
    eventName: T,
    callback: (payload: ThemeSwitchEventsDef[T]) => void,
  ): Unsubscribe {
    const handler = (event: Event) => {
      if (this.isCustomEvent(event)) {
        const eventPayload: ThemeSwitchEventsDef[T] = event.detail;
        callback(eventPayload);
        console.log(event);
      }
    };

    eventBus.addEventListener(eventName, handler);
    return () => {
      eventBus.removeEventListener(eventName, handler);
    };
  }

  /**
   * Subscribe to an event with no payload
   * @param eventName
   * @param callback
   */
  subscribeNoPayload<T extends ThemeSwitchEventsNoPayload>(
    eventName: T,
    callback: (event?: Event) => ThemeSwitchEventsDefNoPayload[T],
  ): Unsubscribe {
    const eventHandler = (event: Event) => {
      console.log(event);
      callback(event);
    };

    eventBus.addEventListener(eventName, eventHandler);
    return () => {
      eventBus.removeEventListener(eventName, eventHandler);
    };
  }
}

export default ThemeSwitchEventBus;
